import React, { useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { toggleThemeMode } from '../../../store/reducers/themeModeSlice';
import { useAppDispatch, useAppSelector } from '../../../store';

const ThemeModeToggle = () => {
  const themeMode = useAppSelector((state) => state.themeMode.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const scrollColors: Record<string, string> = {
      '--theme-scroll-bg-color': '#fff',
      '--theme-scroll-thumb-color': '#aab',
      '--theme-scroll-hover-color': '#99a',
    };
    if (themeMode === 'dark') {
      scrollColors['--theme-scroll-bg-color'] = '#121E2D';
      scrollColors['--theme-scroll-thumb-color'] = '#40404588';
      scrollColors['--theme-scroll-hover-color'] = '#404045';
    }

    for (const key in scrollColors) {
      (document.querySelector(':root') as HTMLElement).style.setProperty(
        key,
        scrollColors[key],
      );
    }
  }, [themeMode]);

  return (
    <div className="theme-toggle">
      <DarkModeSwitch
        checked={themeMode === 'dark'}
        onChange={() => dispatch(toggleThemeMode())}
        size={22}
      />
    </div>
  );
};

export default ThemeModeToggle;
