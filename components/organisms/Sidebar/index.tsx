import Profile from "./Profile";
import Footer from "./Footer";
import MenuItem from "./MenuItem";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="ic-overview" active />
          <MenuItem title="Transactions" icon="ic-transaction" />
          <MenuItem title="Message" icon="ic-message" />
          <MenuItem title="Card" icon="ic-card" />
          <MenuItem title="Reward" icon="ic-reward" />
          <MenuItem title="Setting" icon="ic-setting" />
          <MenuItem title="Log Out" icon="ic-transaction" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
