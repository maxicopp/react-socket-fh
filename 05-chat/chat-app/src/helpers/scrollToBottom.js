import { animateScroll } from 'react-scroll';

const TIMEOUT = 10;

export const scrollToBottom = (id) => {

    setTimeout(() => {
        animateScroll.scrollToBottom({
            containerId: id,
            duration: 0
        });
    }, TIMEOUT);

}

export const scrollToBottomAnimated = (id) => {

    setTimeout(() => {
        animateScroll.scrollToBottom({
            containerId: id,
            duration: 250
        });
    }, TIMEOUT);

}