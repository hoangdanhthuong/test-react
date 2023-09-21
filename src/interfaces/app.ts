export interface NavItem {
  label: string; // The label or text to display for the navigation item
  link: string; // The URL or route to navigate to when the item is clicked
  icon?: string; // Optional icon to display alongside the label (e.g., for icons like Font Awesome or Material Icons)
  isActive?: boolean; // Optional flag to indicate if the item is currently active or selected
  onClick?: () => void;
}
