import Header from "@/components/Header";
import Layout from "@/components/Layout";
import styles from '../styles/contact.module.css'

export default function Contact() {
  return (
    <Layout>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Contact</h1>
        <div className={styles.containerCard}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Contact me</h3>
            <p className={styles.phoneNumber}>+25 3698521478</p>
            <img className={styles.icon} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAotJREFUSEuVleGV2kAMhD9VAKkgpIKDCg53wFUAqeAuFYRUcEkFIRVcUgHQAVQQSqAD5WlXu9ZifO/Fv8Bea0ajGVkIlwA6diM99BPx4Nj9VEewx+0VX/Angxp3zvRFWvQRAMMuhAd9DThlrqV7Y61ViQbAD02BvVfpgOsIxAb4WZj0RZ1aULMyEphqKi7zxEc4odKBXkNLsYMMMrwq8djBVGCvMAc5O8ADKidBO4XrrRQuygvw6jPtdboz5APwCJyBpZOyew/ACehArr3PkgZFzvmN+aS4MXaQTSh8QDNbhCkqB9ACsgiFQseJ1K52kmdemyq/g8vrhKYoe4G5whFk6R1E5qVjm9MGTTO5AcjUD4I+apKCg0OYNMa+FumNYLPq74ccbEB3xbdRop3AWoUvKN8d4ALyETSBepEV8FaLC9fbhDdRC3+K5U4gC/e16boW+KFgbinCrtAEmGd17wpxKG9NQS8IE5RPwAWYgfx1yy7MsnFbDVbSe4HIi0l3CmvgF2Ad2WVyPWu26udk2Vw5JF46Qa/Nomxc1Md6lgvJxMN1ALHOSh4SIPAH5FXQuVsv5yTNo20jD7ldNlvga9JXWKBcknOELcpzcIt1fHaAnBOhQ2MYg1/DAK19s6lZ1pg9CVyc2EzgRYWVF/LEN2HsBFyu8j0YrkvT12VJjJ6CTYO6VY9wPpFatDkYANQ989v3kxXdgXwTtHTT7wJNc7IVb+E7pl3WrOvqWfXMhKcqW1DLwMSddtK8d04CR6W6yZMty+io5oMzGpqUB2z4luJJY4q++zPCsi5Kd08AGPlutai2QZeagGQG+uhgJssq27StE2waZRmJZPNye74vew/gP+q9s3hunJ7//gPEQhIu2tzymAAAAABJRU5ErkJggg=="/>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Address</h3>
            <p className={styles.phoneNumber}>Dir. 25 Av. 102 Street California</p>
            <img className={styles.icon} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAkNJREFUSEuFlv9dGzEMxb+aADYgTNBkAtINygQ0E4ROUpgAOkHZoGECsgGwAUxgPrJlW/LdpfdHcrGtX0/vyRHaIwiJJKAf+b1v2tvSetvOtjRLQcxfX5s49cawdP7UulnNeC7JrAT2CbYga8vkCBwE7hO8LeWkjtVFDOArhDuQ/VJ5dvQO+HWq8IhvD6BZfrPNP+Rg6Jo+a+BW4Kb0SY6QNmUrZrjUA3W2Bz7J0DTHg3kOdADODK7bsZICkY8srEi82uLGsquJVWJlO2vsmsSLnb+k9qSxcQxQoNDs7xWGIaMQwO09AjfBxpAKENlaxX6DcGy8LpuV5dKwLusKlVahttaLUuMci6rCKnxVe5lMne9NdBWuZOUF2Od60OVcMHDarHU7sZaY+ZwxwPnElByBVlZcWamVlvWE60GgozLtH/BsrAudjSyC2jAVjwrNzyWjfV7y5FMy/AZULz99vrGcUvkP4K/AWxIuY5Ml2RDsTS7edFxcANcgT175IYCLXA12lIoiaeJk04wfgHdgNZXVQHT7masAPgAVj37PPeeQRanf18CTy6Xl1bjX74O8d0C4IuWp+X3hbjimMq9Cc+ONMBeyXDjnNop1zjwm2A3iqmT4BFlB+giDyjF6+T7IU1MOkM6sFzuz686FLakPwxFHp+RhzHaFtYmpQQS0Mu3RZNJOmxRGRQwwHPZBdEth2UIahTiY1TvZ+j00OQpQ0LFcKFvE5JzHPwPTJo/SGyjTDf7zr2KGyHNKnlzSk8pOohmjfAFD6OEgLZs/AAAAAABJRU5ErkJggg=="/>
          </article>
        </div>
      </div>
    </Layout>
  )
}
