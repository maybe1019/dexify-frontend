import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useAppDispatch, useAppSelector } from '../../store';
import { toggleThemeMode } from '../../store/reducers/themeModeSlice';

const ThemeModeToggle = () => {
  const themeMode = useAppSelector((state) => state.themeMode.value);
  const dispatch = useAppDispatch();

  return (
    <div className="theme-toggle">
      <DarkModeSwitch
        checked={themeMode === 'dark'}
        onChange={() => dispatch(toggleThemeMode())}
        size={24}
      />
    </div>
  );
};

export default ThemeModeToggle;
