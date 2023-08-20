import React, { useState } from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Collapse,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Dashboard,
  People,
  BarChart,
  Assignment,
} from "@mui/icons-material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

interface IItem {
  label: string;
  url: string;
}

const generateSubItems = (items: IItem[], openState: boolean) => {
  return (
    <Collapse in={openState} timeout="auto" unmountOnExit>
      {items.map((subitem, index) => (
        <ListItemButton key={index} component={Link} to={subitem.url}>
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary={subitem.label} />
        </ListItemButton>
      ))}
    </Collapse>
  );
};

export const MainListItems = () => {
  const [openSales, setOpenSales] = useState(false);
  const [openInventory, setOpenInventory] = useState(false);
  const [openCustomers, setOpenCustomers] = useState(false);
  const [openReports, setOpenReports] = useState(false);
  const [openEmployees, setOpenEmployees] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [openPromotions, setOpenPromotions] = useState(false);
  const [openExpenses, setOpenExpenses] = useState(false);

  const salesSubItems = [
    { label: "Point of Sale", url: "/sales/pos" },
    { label: "Orders", url: "/sales/orders" },
  ];
  const inventorySubItems = [
    { label: "Products", url: "/inventory/products" },
    { label: "Categories", url: "/inventory/categories" },
    { label: "Stock Control", url: "/inventory/stock" },
    { label: "Suppliers", url: "/inventory/suppliers" },
  ];
  const customersSubItems = [
    { label: "Customers List", url: "/customers/list" },
    { label: "Loyalty Programs", url: "/customers/loyalty" },
  ];
  const reportsSubItems = [
    { label: "Sales Reports", url: "/reports/sales" },
    { label: "Inventory Reports", url: "/reports/inventory" },
    { label: "Profit and Loss", url: "/reports/profit-loss" },
  ];
  const employeesSubItems = [
    { label: "Staff Management", url: "/employees/staff" },
    { label: "Time and Attendance", url: "/employees/attendance" },
  ];
  const settingsSubItems = [
    { label: "Store Settings", url: "/settings/store" },
    { label: "Payment Settings", url: "/settings/payment" },
    { label: "User Permissions", url: "/settings/permissions" },
    { label: "Notifications", url: "/settings/notifications" },
  ];
  const promotionsSubItems = [
    { label: "Discounts", url: "/promotions/discounts" },
    { label: "Special Offers", url: "/promotions/offers" },
  ];
  const expensesSubItems = [
    { label: "Expense Tracking", url: "/expenses/tracking" },
  ];

  return (
    <React.Fragment>
      <ListItemButton component={Link} to="/">
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>

      <ListItemButton onClick={() => setOpenSales(!openSales)}>
        <ListItemIcon>
          <BarChart />
        </ListItemIcon>
        <ListItemText primary="Sales" />
        {openSales ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {generateSubItems(salesSubItems, openSales)}

      <ListItemButton onClick={() => setOpenInventory(!openInventory)}>
        <ListItemIcon>
          <BarChart />
        </ListItemIcon>
        <ListItemText primary="Inventory" />
        {openInventory ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {generateSubItems(inventorySubItems, openInventory)}

      <ListItemButton onClick={() => setOpenCustomers(!openCustomers)}>
        <ListItemIcon>
          <BarChart />
        </ListItemIcon>
        <ListItemText primary="Customers" />
        {openCustomers ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {generateSubItems(customersSubItems, openCustomers)}

      <ListItemButton onClick={() => setOpenReports(!openReports)}>
        <ListItemIcon>
          <BarChart />
        </ListItemIcon>
        <ListItemText primary="Reports" />
        {openReports ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {generateSubItems(reportsSubItems, openReports)}

      <ListItemButton onClick={() => setOpenEmployees(!openEmployees)}>
        <ListItemIcon>
          <BarChart />
        </ListItemIcon>
        <ListItemText primary="Employees" />
        {openEmployees ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {generateSubItems(employeesSubItems, openEmployees)}

      <ListItemButton onClick={() => setOpenSettings(!openSettings)}>
        <ListItemIcon>
          <BarChart />
        </ListItemIcon>
        <ListItemText primary="Settings" />
        {openSettings ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {generateSubItems(settingsSubItems, openSettings)}

      <ListItemButton onClick={() => setOpenPromotions(!openPromotions)}>
        <ListItemIcon>
          <BarChart />
        </ListItemIcon>
        <ListItemText primary="Promotions" />
        {openPromotions ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {generateSubItems(promotionsSubItems, openPromotions)}

      <ListItemButton onClick={() => setOpenExpenses(!openExpenses)}>
        <ListItemIcon>
          <BarChart />
        </ListItemIcon>
        <ListItemText primary="Expenses" />
        {openExpenses ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {generateSubItems(expensesSubItems, openExpenses)}
    </React.Fragment>
  );
};

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Admin Tools
    </ListSubheader>
    <ListItemButton component={Link} to="/admin">
      <ListItemIcon>
        <Assignment />
      </ListItemIcon>
      <ListItemText primary="Admin" />
    </ListItemButton>
  </React.Fragment>
);
