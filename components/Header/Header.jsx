import { GiHamburger } from "react-icons/gi";
import Link from "next/link";

export default () => {
  return (
    <header>
      <div>
        <GiHamburger />
      </div>
      <nav>
        <Link href='/'>
          <a>Домой</a>
        </Link>
        <Link href='/about'>
          <a>О нас</a>
        </Link>
        <Link href='/reviews'>
          <a>Отзывы</a>
        </Link>
        <Link href='/burgers'>
          <a>Бургеры</a>
        </Link>
      </nav>
    </header>
  );
};
