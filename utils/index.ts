import { SingleNavItem } from '../types';

export default function getRouteInfo(
  navTree: SingleNavItem[],
  path: string
): SingleNavItem | undefined {
  let route;
  navTree.forEach((p) => {
    if (path.indexOf(p.path) >= 0) {
      route = p;
    }
  });
  return route;
}
