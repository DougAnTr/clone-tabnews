import { cookies } from 'next/headers'

export default function Home(){
    cookies().set('clone', 'tabnews');
    
    return <iframe src="https://lastorg.dynzup-test.com/zup/Z-336" width="540" height="500" allowFullScreen></iframe>
}