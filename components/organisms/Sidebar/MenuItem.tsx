import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

interface MenuItemProps {
  title: string;
  href: string;
  active?: boolean;
  icon:
    | "ic-card"
    | "ic-footer"
    | "ic-logout"
    | "ic-message"
    | "ic-overview"
    | "ic-reward"
    | "ic-setting"
    | "ic-transaction";
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href = "/" } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active,
  });

  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/sidebar/${icon}.svg`} width={25} height={25} />
      </div>
      <Link href={href}>
        <p className="item-title m-0">
          <a className="text-lg text-decoration-none">{title}</a>
        </p>
      </Link>
    </div>
  );
}
