
interface ScrollEvent{
    preventScroll:()=>number,
    allowScroll: (prevScrollY: number) => void
}
export const useScrollLock =():ScrollEvent=>{

    const preventScroll = () => {
        const currentScrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.overflowY='hidden';
        document.body.style.width = '100%';
        document.body.style.touchAction ='none';
        document.body.style.top = `-${currentScrollY}px`; // 현재 스크롤 위치
        document.body.style.overflowY = 'scroll';
        return currentScrollY;
    };

    const allowScroll = (prevScrollY: number) => {
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, prevScrollY);
    };

    return {preventScroll, allowScroll}
}