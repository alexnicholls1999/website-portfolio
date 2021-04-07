import { useSpring, config } from "react-spring";
import { useDrag } from "react-use-gesture";

const height = 60 + 80;

export function useSwipeDown() {
    const [{y}, set] = useSpring(() => ({ y: height }));

    const open = ({ canceled }) => {
        set({
            y: 0,
            immediate: false,
            config: canceled ? config.wobbly : config.stiff
        });
    };

    const close = (velocity = 0) => {
        set({ y: height, immediate: false, config: {...config.stiff, velocity} });
    }

    const bind = useDrag(
        ({ last, vxvy: [, vy], movement: [, my], cancel, canceled}) => {
            if (my < -70) cancel();

            if (last){
                my > height * 0.5 || vy > 0.5 ? close(vy) : open({ canceled });
            } else set({ y: my, immediate: true});
        },
        {
            initial: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0},
            rubberband: true
        }
    );

    const display = y.to((py) => (py < height ? "block" : "none"));

    const bgStyle = {
        transform: y.to(
            [0, height],
            ["translateY(-8%) scale(1)", "translateY(0px) scale(1)"]
        ),
        opacity: y.to([0, height], [0.4, 1], "clamp")
    };

    return {
        bind,
        open,
        close,
        display,
        bgStyle,
        height,
        y
    }
}