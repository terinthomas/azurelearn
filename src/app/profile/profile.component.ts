import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  readonly profileStats = [
    { label: 'Completed shifts', value: '148' },
    { label: 'Avg. guest score', value: '4.9' },
    { label: 'Saved tips', value: '$3.2K' },
  ];

  readonly teamGoals = [
    'Resolve guest issues within 4 minutes',
    'Keep table readiness above 90%',
    'Complete onboarding checklist for new hires',
  ];

  readonly activityLog = [
    { title: 'Updated floor plan', time: '2 hours ago', detail: 'Added a new waiting area for 8 guests.' },
    { title: 'Reviewed menu feedback', time: 'Yesterday', detail: 'Three dishes ranked above 4.8 in guest satisfaction.' },
    { title: 'Held team sync', time: '3 days ago', detail: 'Confirmed evening staffing numbers for Friday service.' },
  ];
}
