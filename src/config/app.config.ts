interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Fleet Manager', 'Admin'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View list of available cars',
    'View details of a specific car',
    'Book a car',
    'Edit or cancel booking',
  ],
  ownerAbilities: ['Manage Company profile', 'Invite Fleet Managers and Admins to the Company profile'],
  getQuoteUrl: 'https://app.roq.ai/proposal/21504fdd-2bbd-4f49-95e5-8878fa26d277',
};
