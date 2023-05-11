import * as React from 'react';
import { FC, HTMLAttributes, ReactNode } from 'react';
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingPortal,
  offset,
  Placement,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useMergeRefs,
  useRole,
} from '@floating-ui/react';

interface PopoverOptions {
  initialOpen?: boolean;
  placement?: Placement;
  modal?: boolean;
  open?: boolean;
  onOpenChange?: (_open: boolean) => void;
}

export function usePopover({
  initialOpen = false,
  placement = 'bottom',
  modal,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: PopoverOptions = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);
  const [labelId, setLabelId] = React.useState<string | undefined>();
  const [descriptionId, setDescriptionId] = React.useState<string | undefined>();

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(10),
      flip({
        fallbackAxisSideDirection: 'end',
        padding: 5,
      }),
      shift({ padding: 5 }),
    ],
  });

  const context = data.context;

  const click = useClick(context, {
    enabled: controlledOpen == null,
  });
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const interactions = useInteractions([click, dismiss, role]);

  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      modal,
      labelId,
      descriptionId,
      setLabelId,
      setDescriptionId,
    }),
    [open, setOpen, interactions, data, modal, labelId, descriptionId]
  );
}

type ContextType =
  | (ReturnType<typeof usePopover> & {
      setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>;
      setDescriptionId: React.Dispatch<React.SetStateAction<string | undefined>>;
    })
  | null;

const PopoverContext = React.createContext<ContextType>(null);

export const usePopoverContext = () => {
  const context = React.useContext(PopoverContext);

  if (context == null) {
    throw new Error('Popover components must be wrapped in <Popover />');
  }

  return context;
};

export function Popover({
  children,
  modal = false,
  ...restOptions
}: {
  children: React.ReactNode;
} & PopoverOptions) {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const popover = usePopover({ modal, ...restOptions });
  return <PopoverContext.Provider value={popover}>{children}</PopoverContext.Provider>;
}

interface PopoverTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export const PopoverTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & PopoverTriggerProps
>(function PopoverTrigger({ children, asChild = false, ...props }, propRef) {
  const context = usePopoverContext();
  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

  // `asChild` allows the user to pass any element as the anchor
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      context.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        'data-state': context.open ? 'open' : 'closed',
      })
    );
  }

  return (
    <button
      ref={ref}
      type="button"
      // The user can style the trigger based on the state
      data-state={context.open ? 'open' : 'closed'}
      {...context.getReferenceProps(props)}
    >
      {children}
    </button>
  );
});

interface PopoverContentProps extends React.HTMLProps<HTMLDivElement> {}

export const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  function PopoverContent(props, propRef) {
    const {
      context: floatingContext,
      floatingStyles,
      refs,
      modal,
      labelId,
      descriptionId,
      getFloatingProps,
    } = usePopoverContext();
    const ref = useMergeRefs([refs.setFloating, propRef]);

    if (!floatingContext.open) return null;

    const styles = {
      ...floatingStyles,
      ...props.style,
    };

    return (
      <FloatingPortal>
        <FloatingFocusManager context={floatingContext} modal={modal}>
          <div
            ref={ref}
            style={styles}
            aria-labelledby={labelId}
            aria-describedby={descriptionId}
            {...getFloatingProps(props)}
          >
            {props.children}
          </div>
        </FloatingFocusManager>
      </FloatingPortal>
    );
  }
);

export const PopoverHeading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLProps<HTMLHeadingElement>
>(function PopoverHeading({ children, ...props }, ref) {
  const { setLabelId } = usePopoverContext();
  const id = useId();

  // Only sets `aria-labelledby` on the Popover root element
  // if this component is mounted inside it.
  React.useLayoutEffect(() => {
    setLabelId(id);
    return () => setLabelId(undefined);
  }, [id, setLabelId]);

  return (
    <h2 {...props} ref={ref} id={id}>
      {children}
    </h2>
  );
});

export const PopoverDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLProps<HTMLParagraphElement>
>(function PopoverDescription({ children, ...props }, ref) {
  const { setDescriptionId } = usePopoverContext();
  const id = useId();

  // Only sets `aria-describedby` on the Popover root element
  // if this component is mounted inside it.
  React.useLayoutEffect(() => {
    setDescriptionId(id);
    return () => setDescriptionId(undefined);
  }, [id, setDescriptionId]);

  return (
    <p {...props} ref={ref} id={id}>
      {children}
    </p>
  );
});

interface PopoverCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const PopoverClose = React.forwardRef<HTMLButtonElement, PopoverCloseProps>(
  function PopoverClose(props, ref) {
    const { setOpen } = usePopoverContext();
    return (
      <button
        type="button"
        ref={ref}
        {...props}
        onClick={(event) => {
          props.onClick?.(event);
          setOpen(false);
        }}
      />
    );
  }
);

interface PopupProps extends HTMLAttributes<HTMLBaseElement> {
  component?: ReactNode;
  solidNav?: boolean;
}

const Popup: FC<PopupProps> = ({ children, component, solidNav }: PopupProps) => {
  return (
    <Popover>
      <PopoverTrigger
        className={`font-semibold leading-6 hover:text-primary ${solidNav ? '' : 'text-white'}`}
      >
        {children}
      </PopoverTrigger>
      <PopoverContent className="popover">{component}</PopoverContent>
    </Popover>
  );
};

export default Popup;
