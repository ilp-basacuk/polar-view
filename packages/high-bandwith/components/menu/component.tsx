import React, { FC, useCallback } from 'react';

import Tippy from '@tippyjs/react/headless';
import { useSpring, motion } from 'framer-motion';
import { SpringOptions } from 'popmotion';

interface MenuItem {
  text?: string;
  value?: string;
}
export interface MenuProps {
  items: MenuItem[];
  maxWidth?: string | number;
  children?: React.ReactElement;
  onClick?: (item: MenuItem) => boolean | null;
}

export const Menu: FC<MenuProps> = ({
  items,
  maxWidth = 115,
  children,
  onClick,
  ...props
}: MenuProps) => {
  const springConfig: SpringOptions = { damping: 15, stiffness: 300 };
  const opacity = useSpring(0, springConfig);
  const scale = useSpring(0.95, springConfig);
  const [isVisible, setIsVisible] = React.useState(false);
  const tippyRef = React.useRef(null);

  const onMount = useCallback(() => {
    scale.set(1);
    opacity.set(1);
  }, []);

  const onHide = useCallback(({ unmount }) => {
    setIsVisible(false);
    const cleanup = scale.onChange((value) => {
      if (value <= 0.95) {
        cleanup();
        unmount();
      }
    });

    scale.set(0.95);
    opacity.set(0);
  }, []);

  return (
    <Tippy
      {...props}
      ref={tippyRef}
      render={(attrs) => (
        <motion.div className="z-50" style={{ scale, opacity, maxWidth: maxWidth || 'none' }} {...attrs}>
          <div className="relative">
            <div className="px-2 py-1 border border-mainblue bg-blur flex flex-col text-white text-tiny font-bolder space-y-2">
              {items.map((item) => (
                <button
                  type="button"
                  key={item.value}
                  className="text-left"
                  onClick={() => {
                    if (onClick) {
                      if (onClick(item)) {
                        // eslint-disable-next-line no-underscore-dangle
                        tippyRef?.current?._tippy.hide();
                      }
                    }
                  }}
                >
                  {item.text}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
      onShow={() => setIsVisible(true)}
      animation
      onMount={onMount}
      onHide={onHide}
      trigger="click"
      interactive
      placement="top-end"
    >
      {React.cloneElement(children, { active: isVisible })}
    </Tippy>
  );
};

export default Menu;
