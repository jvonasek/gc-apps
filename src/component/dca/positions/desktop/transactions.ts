import { css, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

import { ColumnDef, Row } from '@tanstack/table-core';
import { Datagrid } from '../../../datagrid';

import { PastTransactions } from '../model';

@customElement('gc-dca-past-transactions')
export class DcaPastTransactions extends Datagrid<PastTransactions> {
  static styles = [
    Datagrid.styles,
    css`
      tbody tr:last-child {
        border-bottom: none;
      }

      tr {
        cursor: default;
      }
    `,
  ];

  protected defaultColumns(): ColumnDef<PastTransactions>[] {
    return [
      {
        id: 'date',
        header: () => 'Date',
        accessorKey: 'date',
      },
      {
        id: 'amount',
        header: () => 'Amount',
        accessorKey: 'amount',
      },
      {
        id: 'price',
        header: () => 'Price',
        accessorKey: 'price',
      },
      {
        id: 'balance',
        header: () => 'Balance',
        accessorKey: 'balance',
      },
    ];
  }

  protected expandedRowTemplate(_row: Row<PastTransactions>): TemplateResult {
    return null;
  }
}