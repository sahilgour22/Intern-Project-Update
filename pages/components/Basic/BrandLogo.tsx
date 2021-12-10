import Image from "next/image";
import Link from "next/link";

export default function BrandLogo() {
	return (
		<>
			<div className='flex justify-center'>
				{/* <Link href='/' passHref> */}
				<Image height={40} width={40} src='/brandLogo.svg' alt='' />
				{/* </Link> */}
			</div>
		</>
	);
}
