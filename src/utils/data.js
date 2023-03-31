
export async function getData() {
  const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=eNnvWXRXeAoi46DuYePffd8AWw13mGbJukMfZMDn')
  const info = await res.json()

  return {
    props: {
      info,
    }
  }
}
