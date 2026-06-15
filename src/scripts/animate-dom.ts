import { animate } from 'motion';
import type { DOMKeyframesDefinition, ElementOrSelector, Transition } from 'motion-dom';

export function animateDom(
	element: ElementOrSelector,
	keyframes: DOMKeyframesDefinition,
	options?: Transition,
) {
	return animate(element, keyframes, options);
}
