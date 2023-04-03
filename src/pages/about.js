import Header from "@/components/Header";
import Layout from "@/components/Layout";
import styles from '../styles/about.module.css'

export default function about() {
  return (
    <Layout>
      <Header />
      <article className={styles.container}>
        <h1 className={styles.title}>About</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a cursus dui, nec ultricies arcu. Maecenas malesuada ex et feugiat dapibus. Fusce luctus ullamcorper neque vestibulum commodo. Etiam vestibulum odio semper posuere dignissim. Maecenas mattis in ex quis dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra nisl ex, quis ornare ex efficitur id. Cras quis augue ac nibh tincidunt ornare vitae et justo. Nunc suscipit convallis nunc, non efficitur nulla cursus congue. Phasellus pellentesque nulla ut diam elementum, vitae porttitor diam pulvinar. In ligula metus, semper id varius nec, tristique nec sapien. Pellentesque rutrum ligula sem, id condimentum nulla rhoncus a. Phasellus metus nisl, aliquet ut condimentum quis, sodales eget eros. Quisque aliquet mi et lacus posuere mattis. Ut sit amet maximus justo. Praesent quis est sed metus luctus elementum quis sollicitudin eros.

        Etiam nisi purus, ultrices non nunc sed, suscipit mollis velit. Donec in sem et risus mattis cursus. Donec eleifend ex at purus facilisis, at pulvinar sem vehicula. Etiam nec ante vitae justo molestie dapibus id ut nisi. Mauris in ante felis. Sed at urna at risus cursus commodo sit amet mattis massa. Maecenas ac tristique urna, sit amet fermentum enim. Vestibulum risus sem, efficitur in pellentesque vel, laoreet et urna. In sit amet justo felis. In arcu dolor, ullamcorper luctus malesuada a, sagittis a erat. Nam maximus id ex at condimentum. Curabitur porta volutpat ex at convallis. Curabitur molestie sapien sit amet tristique tempus.

        Mauris egestas quam dictum interdum cursus. Suspendisse potenti. Pellentesque sodales porttitor dolor vulputate vestibulum. Suspendisse luctus hendrerit dolor vel interdum. Mauris in nisi auctor, efficitur ex ac, malesuada dolor. Phasellus lobortis justo sit amet dui vestibulum, vitae luctus nisi pharetra. Mauris nec gravida diam. In sit amet auctor dui. Nunc sit amet tincidunt leo. Praesent erat arcu, consectetur non luctus sit amet, aliquet quis mi. Phasellus tempus eros a neque fringilla ullamcorper. Fusce ut arcu vel dui egestas luctus sed et ante.

        Donec finibus rutrum luctus. Quisque dapibus quam et enim laoreet egestas. Nullam in auctor velit. Sed varius egestas lectus, a venenatis tortor fermentum non. Suspendisse eu est iaculis, egestas sem id, convallis orci. In interdum lacinia tincidunt. Nunc consequat arcu vel tortor mattis, sed accumsan tellus rutrum. In vitae risus urna. Ut quis porta dui. Suspendisse porttitor dui nisl, in tristique nisi faucibus sagittis. Duis placerat venenatis tincidunt.

        Nulla pellentesque nibh id massa blandit, nec iaculis nisl gravida. Ut a elementum sapien. Duis hendrerit lacus a sagittis malesuada. Fusce ut nisl quis ipsum consequat finibus. Sed eros massa, maximus non quam a, suscipit accumsan felis. Fusce rutrum nibh nisl, non lacinia neque fermentum ut. Curabitur id quam vitae risus posuere semper eu sed mauris. Phasellus vel urna pretium, iaculis massa a, maximus mauris. Proin sed lacus dignissim, congue neque ac, accumsan arcu. Vivamus vitae arcu vitae ligula accumsan egestas. In hendrerit nunc ante, id scelerisque libero imperdiet eget.</p>
      </article>
    </Layout>
  )
}
