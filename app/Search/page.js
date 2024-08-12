import Script from 'next/script'

export default async function Page({params}) {
    return(
        <main>
            <Script async src="https://cse.google.com/cse.js?cx=97e62bd161dda420a" />
            <div className="gcse-search"></div>
        </main>
    );
}