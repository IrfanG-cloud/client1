import Link from "next/link"
import Head from "next/head"

export default function Home() {
    return (
        
      <>
      <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" ></link>
        </Head>
        <Link href="">Science And Technology</Link>
        <Link href="">Mix</Link>
        <Link href="">Culture</Link>
        <Link href="">Economie</Link>
        <Link href="">Sports</Link>
        <Link href="">Trends</Link>
        <Link href="">News</Link>
        <Link href="">Latest News</Link>
        <button type="button" className="btn btn-primary">Primary</button>
  
      </>
    
    )
  }
   
  