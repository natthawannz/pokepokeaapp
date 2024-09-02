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
            ชื่อ นางสาวณัฐวรรณ พวงมะลัย ชื่อเล่นพู่ อายุ 20ปี
          </p>  
          <p className={styles.description}>
            ศึกษาอยู่คณะสหวิทยาการ สาขาวิทยาการคอมพิวเตอร์และสารสนเทศ 
            </p>
            <p> ระดับปริญญาตรี ชั้นปีที่ 3</p>
          
          <p className={styles.intro}>
            ภูมิลำเนาอยู่ที่ </p>

           <p className={styles.description}>
            บ้านหนองโน ตำบลรอบเมือง อำเภอหนองพอก จังหวัดร้อยเอ็ด
          </p>
        </div>

        <div id="img-main" className={styles.imgMain}>
          <Image 
            className={styles.pf} 
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