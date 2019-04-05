import * as React from "react";

function noop() {}

export function preventDefault<E extends React.SyntheticEvent>(
  func: (event: E) => void = noop
) {
  return (event: E) => {
    event.preventDefault();
    func(event);
  };
}

export function stopPropagation<E extends React.SyntheticEvent>(
  func: (event: E) => void = noop
) {
  return (event: E) => {
    event.stopPropagation();
    func(event);
  };
}

export function onlyOnSelf<E extends React.SyntheticEvent>(
  func: (event: E) => void = noop
) {
  return (event: E) => {
    if (event.target === event.currentTarget) {
      func(event);
    }
  };
}

export function blurTarget<E extends React.SyntheticEvent<HTMLElement>>(
  func: (event: E) => void = noop
) {
  return (event: E) => {
    event.currentTarget.blur();
    func(event);
  };
}
