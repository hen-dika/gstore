import Profile from "./Profile";
import Footer from "./Footer";
import MenuItem from "./MenuItem";

interface MenuProps {
  activeMenu:
    | "overview"
    | "transactions"
    | "settings"
    | "messages"
    | "card"
    | "rewards"
    | "logout";
}

export default function Sidebar(props: MenuProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="ic-overview"
            active={activeMenu === "overview"}
            href="/member"
          />
          <MenuItem
            title="Transactions"
            icon="ic-transaction"
            href="/member/transactions"
            active={activeMenu === "transactions"}
          />
          <MenuItem
            title="Messages"
            icon="ic-message"
            href="/member"
            active={activeMenu === "messages"}
          />
          <MenuItem
            title="Card"
            icon="ic-card"
            href="/member"
            active={activeMenu === "card"}
          />
          <MenuItem
            title="Reward"
            icon="ic-reward"
            href="/member"
            active={activeMenu === "rewards"}
          />
          <MenuItem
            title="Setting"
            icon="ic-setting"
            href="/member/edit-profile"
            active={activeMenu === "settings"}
          />
          <MenuItem
            title="Log Out"
            icon="ic-transaction"
            href="/sign-in"
            active={activeMenu === "logout"}
          />
        </div>
        <Footer />
      </div>
    </section>
  );
}
