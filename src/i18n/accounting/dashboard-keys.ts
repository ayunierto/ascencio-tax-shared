export const DashboardMessages = {
  // Dashboard metrics
  DASHBOARD_METRICS: 'dashboardMetrics',
  TOTAL_USERS: 'totalUsers',
  TOTAL_APPOINTMENTS: 'totalAppointments',
  UPCOMING_APPOINTMENTS: 'upcomingAppointments',
  TODAY_APPOINTMENTS: 'todayAppointments',
  TOTAL_SERVICES: 'totalServices',
  ACTIVE_STAFF: 'activeStaff',
  COMPLETED_APPOINTMENTS: 'completedAppointments',
  MONTHLY_REVENUE: 'monthlyRevenue',
  
  // Dashboard sections
  RECENT_ACTIVITY: 'recentActivity',
  QUICK_ACTIONS: 'quickActions',
  OVERVIEW: 'overview',
  VIEW_ALL: 'viewAll',
} as const;

export type DashboardMessageKey =
  (typeof DashboardMessages)[keyof typeof DashboardMessages];
