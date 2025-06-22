import Link from "next/link";
export default function RootLayout({ children }) {
    return (
    <div>
       <Link href={"/assignment-2/ques1"}>
        <button>ques1</button>
        </Link>
        <Link href={"/assignment-2/ques2"}>
        <button>ques2</button>
        </Link>
        <Link href={"/assignment-2/ques3"}>
        <button>ques3</button>
        </Link>
        <Link href={"/assignment-2/ques4"}>
        <button>ques4</button>
        </Link>
        <Link href={"/assignment-2/ques5"}>
        <button>ques5</button>
        </Link>
        <Link href={"/assignment-2/ques6"}>
        <button>ques6</button>
        </Link>
        <Link href={"/assignment-2/ques7"}>
        <button>ques7</button>
        </Link>
        <Link href={"/assignment-2/ques8"}>
        <button>ques8</button>
        </Link>
        <Link href={"/assignment-2/ques9"}>
        <button>ques9</button>
        </Link>
        <Link href={"/assignment-2/que10"}>
        <button>ques10</button>
        </Link>
        <Link href={"/assignment-2/ques11"}>
        <button>ques11</button>
        </Link>
        <Link href={"/assignment-2/ques12"}>
        <button>ques12</button>
        </Link>
        <Link href={"/assignment-2/ques13"}>
        <button>ques13</button>
        </Link>
        <Link href={"/assignment-2/ques14"}>
        <button>ques14</button>
        </Link>
        <Link href={"/assignment-2/ques15"}>
        <button>ques15</button>
        </Link>
        <Link href={"/assignment-2/ques16"}>
        <button>ques16</button>
        </Link>
        <br></br>
      {children}
    </div>
    );
  }
  