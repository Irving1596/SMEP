/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 */
import { getBoundaries } from './getBoundaries';
/**
 * @param {?} __0
 * @return {?}
 */
function getArea({ width, height }) {
    return width * height;
}
/**
 * @param {?} placement
 * @param {?} refRect
 * @param {?} target
 * @param {?} host
 * @param {?=} allowedPositions
 * @param {?=} boundariesElement
 * @param {?=} padding
 * @return {?}
 */
export function computeAutoPlacement(placement, refRect, target, host, allowedPositions = ['top', 'left', 'bottom', 'right'], boundariesElement = 'viewport', padding = 0) {
    if (placement.indexOf('auto') === -1) {
        return placement;
    }
    /** @type {?} */
    const boundaries = getBoundaries(target, host, padding, boundariesElement);
    /** @type {?} */
    const rects = {
        top: {
            width: boundaries.width,
            height: refRect.top - boundaries.top
        },
        right: {
            width: boundaries.right - refRect.right,
            height: boundaries.height
        },
        bottom: {
            width: boundaries.width,
            height: boundaries.bottom - refRect.bottom
        },
        left: {
            width: refRect.left - boundaries.left,
            height: boundaries.height
        }
    };
    /** @type {?} */
    const sortedAreas = Object.keys(rects)
        .map((/**
     * @param {?} key
     * @return {?}
     */
    key => (Object.assign({ key }, rects[key], { area: getArea(rects[key]) }))))
        .sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    (a, b) => b.area - a.area));
    /** @type {?} */
    let filteredAreas = sortedAreas.filter((/**
     * @param {?} __0
     * @return {?}
     */
    ({ width, height }) => width >= target.clientWidth && height >= target.clientHeight));
    filteredAreas = allowedPositions
        .reduce((/**
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    (obj, key) => {
        return Object.assign({}, obj, { [key]: filteredAreas[key] });
    }), {});
    /** @type {?} */
    const computedPlacement = filteredAreas.length > 0
        ? filteredAreas[0].key
        : sortedAreas[0].key;
    /** @type {?} */
    const variation = placement.split(' ')[1];
    target.className = target.className.replace(/auto/g, computedPlacement);
    return computedPlacement + (variation ? `-${variation}` : '');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL3Bvc2l0aW9uaW5nL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7OztBQUVoRCxTQUFTLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQTZCO0lBQzNELE9BQU8sS0FBSyxHQUFHLE1BQU0sQ0FBQztBQUN4QixDQUFDOzs7Ozs7Ozs7OztBQUVELE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsU0FBaUIsRUFDakIsT0FBWSxFQUNaLE1BQW1CLEVBQ25CLElBQWlCLEVBQ2pCLG1CQUEwQixDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUM1RCxpQkFBaUIsR0FBRyxVQUFVLEVBQzlCLE9BQU8sR0FBRyxDQUFDO0lBRVgsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ3BDLE9BQU8sU0FBUyxDQUFDO0tBQ2xCOztVQUVLLFVBQVUsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsaUJBQWlCLENBQUM7O1VBRXBFLEtBQUssR0FBUTtRQUNqQixHQUFHLEVBQUU7WUFDSCxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUs7WUFDdkIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUc7U0FDckM7UUFDRCxLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSztZQUN2QyxNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU07U0FDMUI7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUs7WUFDdkIsTUFBTSxFQUFFLFVBQVUsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU07U0FDM0M7UUFDRCxJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSTtZQUNyQyxNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU07U0FDMUI7S0FDRjs7VUFFSyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkMsR0FBRzs7OztJQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsaUJBQ1YsR0FBRyxJQUNBLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFDYixJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUN6QixFQUFDO1NBQ0YsSUFBSTs7Ozs7SUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBQzs7UUFFOUIsYUFBYSxHQUFVLFdBQVcsQ0FBQyxNQUFNOzs7O0lBQzNDLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUNwQixLQUFLLElBQUksTUFBTSxDQUFDLFdBQVcsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFlBQVksRUFDL0Q7SUFFRCxhQUFhLEdBQUcsZ0JBQWdCO1NBQzdCLE1BQU07Ozs7O0lBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDbkIseUJBQVksR0FBRyxJQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFHO0lBQy9DLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQzs7VUFFSCxpQkFBaUIsR0FBVyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDeEQsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO1FBQ3RCLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRzs7VUFFaEIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXpDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFFeEUsT0FBTyxpQkFBaUIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDaEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXRpbGl0eSB1c2VkIHRvIHRyYW5zZm9ybSB0aGUgYGF1dG9gIHBsYWNlbWVudCB0byB0aGUgcGxhY2VtZW50IHdpdGggbW9yZVxuICogYXZhaWxhYmxlIHNwYWNlLlxuICovXG5pbXBvcnQgeyBnZXRCb3VuZGFyaWVzIH0gZnJvbSAnLi9nZXRCb3VuZGFyaWVzJztcblxuZnVuY3Rpb24gZ2V0QXJlYSh7IHdpZHRoLCBoZWlnaHQgfTogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSkge1xuICByZXR1cm4gd2lkdGggKiBoZWlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChcbiAgcGxhY2VtZW50OiBzdHJpbmcsXG4gIHJlZlJlY3Q6IGFueSxcbiAgdGFyZ2V0OiBIVE1MRWxlbWVudCxcbiAgaG9zdDogSFRNTEVsZW1lbnQsXG4gIGFsbG93ZWRQb3NpdGlvbnM6IGFueVtdID0gWyd0b3AnLCAnbGVmdCcsICdib3R0b20nLCAncmlnaHQnXSxcbiAgYm91bmRhcmllc0VsZW1lbnQgPSAndmlld3BvcnQnLFxuICBwYWRkaW5nID0gMFxuKSB7XG4gIGlmIChwbGFjZW1lbnQuaW5kZXhPZignYXV0bycpID09PSAtMSkge1xuICAgIHJldHVybiBwbGFjZW1lbnQ7XG4gIH1cblxuICBjb25zdCBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyh0YXJnZXQsIGhvc3QsIHBhZGRpbmcsIGJvdW5kYXJpZXNFbGVtZW50KTtcblxuICBjb25zdCByZWN0czogYW55ID0ge1xuICAgIHRvcDoge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHJlZlJlY3QudG9wIC0gYm91bmRhcmllcy50b3BcbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy5yaWdodCAtIHJlZlJlY3QucmlnaHQsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuaGVpZ2h0XG4gICAgfSxcbiAgICBib3R0b206IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLndpZHRoLFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmJvdHRvbSAtIHJlZlJlY3QuYm90dG9tXG4gICAgfSxcbiAgICBsZWZ0OiB7XG4gICAgICB3aWR0aDogcmVmUmVjdC5sZWZ0IC0gYm91bmRhcmllcy5sZWZ0LFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmhlaWdodFxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzb3J0ZWRBcmVhcyA9IE9iamVjdC5rZXlzKHJlY3RzKVxuICAgIC5tYXAoa2V5ID0+ICh7XG4gICAgICBrZXksXG4gICAgICAuLi5yZWN0c1trZXldLFxuICAgICAgYXJlYTogZ2V0QXJlYShyZWN0c1trZXldKVxuICAgIH0pKVxuICAgIC5zb3J0KChhLCBiKSA9PiBiLmFyZWEgLSBhLmFyZWEpO1xuXG4gIGxldCBmaWx0ZXJlZEFyZWFzOiBhbnlbXSA9IHNvcnRlZEFyZWFzLmZpbHRlcihcbiAgICAoeyB3aWR0aCwgaGVpZ2h0IH0pID0+XG4gICAgICB3aWR0aCA+PSB0YXJnZXQuY2xpZW50V2lkdGggJiYgaGVpZ2h0ID49IHRhcmdldC5jbGllbnRIZWlnaHRcbiAgKTtcblxuICBmaWx0ZXJlZEFyZWFzID0gYWxsb3dlZFBvc2l0aW9uc1xuICAgIC5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5vYmosIFtrZXldOiBmaWx0ZXJlZEFyZWFzW2tleV0gfTtcbiAgICB9LCB7fSk7XG5cbiAgY29uc3QgY29tcHV0ZWRQbGFjZW1lbnQ6IHN0cmluZyA9IGZpbHRlcmVkQXJlYXMubGVuZ3RoID4gMFxuICAgID8gZmlsdGVyZWRBcmVhc1swXS5rZXlcbiAgICA6IHNvcnRlZEFyZWFzWzBdLmtleTtcblxuICBjb25zdCB2YXJpYXRpb24gPSBwbGFjZW1lbnQuc3BsaXQoJyAnKVsxXTtcblxuICB0YXJnZXQuY2xhc3NOYW1lID0gdGFyZ2V0LmNsYXNzTmFtZS5yZXBsYWNlKC9hdXRvL2csIGNvbXB1dGVkUGxhY2VtZW50KTtcblxuICByZXR1cm4gY29tcHV0ZWRQbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gYC0ke3ZhcmlhdGlvbn1gIDogJycpO1xufVxuIl19