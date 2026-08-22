import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  readonly summaryCards = [
    { label: 'Revenue', value: '$84.2K', delta: '+12.4%', note: 'vs last week' },
    { label: 'Orders', value: '1,428', delta: '+8.1%', note: 'this week' },
    { label: 'Guests', value: '3,704', delta: '+5.7%', note: 'served' },
    { label: 'Rating', value: '4.8/5', delta: '+0.3%', note: 'customer feedback' },
  ];

  readonly serviceMetrics = [
    { label: 'Kitchen output', value: '92%', color: 'cyan' },
    { label: 'Table turnover', value: '76%', color: 'amber' },
    { label: 'Guest satisfaction', value: '94%', color: 'green' },
  ];

  readonly recentOrders = [
    { order: '#1048', customer: 'Daniel Wu', item: 'Grill Combo', total: '$28.40', status: 'Ready' },
    { order: '#1049', customer: 'Sofia Reed', item: 'Garden Bowl', total: '$19.10', status: 'In prep' },
    { order: '#1050', customer: 'Marcus Lee', item: 'Citrus Salmon', total: '$32.75', status: 'Served' },
    { order: '#1051', customer: 'Maya Patel', item: 'Truffle Pasta', total: '$26.80', status: 'Pending' },
  ];
}
