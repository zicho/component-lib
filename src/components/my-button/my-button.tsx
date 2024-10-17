import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() label: string;
  @State() count: number = 0;

  private readonly handleClick = () => {
    this.count += 1;
  };

  render() {
    return (
      <button class="btn" onClick={this.handleClick}>
        {this.label}: {this.count}
      </button>
    );
  }
}
