import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { UIGCElement } from './base/UIGCElement';

import { computePosition } from '@floating-ui/dom';

@customElement('uigc-popper')
export class Popper extends UIGCElement {
  @property({ type: String }) text = null;

  static styles = [
    UIGCElement.styles,
    css`
      .tooltip {
        display: none;
        width: max-content;
        max-width: 240px;
        text-align: left;
        position: fixed;
        top: 0;
        left: 0;
        background: var(--hex-dark-blue-400);
        color: white;
        padding: 10px 14px;
        border-radius: 4px;
        font-size: 90%;
        z-index: 1000;
      }
    `,
  ];

  override async firstUpdated() {
    const slotted = this.shadowRoot.querySelector('slot');
    const triggerElement = slotted.assignedElements()[0];
    const tooltipElement = this.shadowRoot.querySelector(
      '.tooltip',
    ) as HTMLElement;

    triggerElement.addEventListener('mouseover', () => {
      computePosition(triggerElement, tooltipElement, {
        placement: 'right-start',
      }).then(({ x, y }) => {
        Object.assign(tooltipElement.style, {
          display: 'block',
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    });

    triggerElement.addEventListener('mouseout', () => {
      Object.assign(tooltipElement.style, {
        display: 'none',
      });
    });
  }

  render() {
    return html`
      <slot></slot>
      <div class="tooltip">${this.text}</div>
    `;
  }
}
