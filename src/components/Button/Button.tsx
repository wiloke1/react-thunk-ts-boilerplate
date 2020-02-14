import React, { Component, ReactNode, CSSProperties } from 'react';
import styles from './Button.module.scss';

interface Props {
  children: ReactNode;
  style: CSSProperties;
}

type DefaultProps = Pick<Props, 'style'>;

export default class Button extends Component<Props> {
  static defaultProps: DefaultProps = {
    style: {},
  };

  render() {
    const { children, style } = this.props;

    return (
      <div className={styles.container} style={style}>
        <button>{children}</button>
      </div>
    );
  }
}
