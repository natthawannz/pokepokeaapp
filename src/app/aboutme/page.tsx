import Image from 'next/image'; 
import styles from './page.module.css'; 
import img from './pro1.jpg';

export default function Page() {
  return (
    <section className={styles.main}>
      <div className={styles.row}>
        <div id="text-main" className={styles.textMain}>
          <h1 className={styles.about}>About Me</h1>
          <p className={styles.intro}>
            ผม ชื่อง เป็นนักศึกษาในมหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย กำลังเรียนอยู่ชั้นปี 3
          </p>  
          <p className={styles.description}>
            เกิดปี 2003 ตอนนี้กำลังเรียนอยู่ชั้นปี 3 สาขาเอกวิทยาการคอมพิมเตอร์และสารสนเทศ ชีวิตประจำวันชอบนอนดูหนัง เล่นเกม ผมเป็นคนที่ค่อนข้างเงียบ ไม่ชอบไปไหนถ้าไม่มีตังแฮะๆ
          </p>
        </div>

        <div id="img-main" className={styles.imgMain}>
          <Image 
            className={styles.witchaphon} 
            src={img}
            alt="Profile Image"
            width={300}
            height={450}
          />
        </div>
      </div>
    </section>
  );
}