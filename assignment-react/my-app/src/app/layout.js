
import "./globals.css";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ShopContext } from "@/context/ShopContext";
import { LanguageSwitcherProvider } from "@/context/LanguageContext";
import { AuthContextProvider } from "@/context/AuthContext";
import { List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Assignment 1', href: '/assignment-1' },
  { label: 'Assignment 2', href: '/assignment-2' },
  { label: 'Assignment 3', href: '/assignment-3' },
  { label: 'Assignment 4', href: '/assignment-4' },
  { label: 'Assignment 5', href: '/assignment-5' },
  { label: 'Assignment 6', href: '/' },
];

const otherLinks = [
  { label: 'about', href: '/about' },
  { label: 'dashboard', href: '/dashboard' },
  { label: 'profile', href: '/profile' },
  { label: 'setting', href: '/settings' },
];

export default function RootLayout({ children }) {
  
  return (
    <html>
      <body style={layoutStyle}>
        {/* Sidebar */}
        <aside style={sidebarStyle}>
          <List>
            {links.map(({ label, href }) => (
              <ListItem key={label} disablePadding>
                <ListItemButton component={Link} href={href} sx={linkStyle}>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          <List>
            {otherLinks.map(({ label, href }) => (
              <ListItem key={label} disablePadding>
                <ListItemButton component={Link} href={href} sx={linkStyle}>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </aside>

        {/* Main content */}
        <main style={{marginLeft:"10px",marginTop:"20px"}}>
          <ThemeContext>
            <ThemeSwitcher />
            <ShopContext>
              <LanguageSwitcherProvider>
                <AuthContextProvider>{children}</AuthContextProvider>
              </LanguageSwitcherProvider>
            </ShopContext>
          </ThemeContext>
        </main>
      </body>
    </html>
  );
}
const layoutStyle = {
  display: "flex",
  minHeight: "100vh",
  margin: 0,
  fontFamily: "inherit",
};

const sidebarStyle = {
  width: "250px",
  color:"black",
  backgroundColor: "#f5f5f5",
  padding: "20px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  borderRight: "1px solid #ddd",
};

const mainContentStyle = {
  flex: 1,
  padding: "40px",
  backgroundColor: "#fff",
};

const linkStyle = {
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
};
