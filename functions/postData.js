async function postData(data, url) {
  const response = await fetch(url, {
    method:"POST",
    mode:"cors",
    cache:"no-cache",
    credentials:"same-origin",
    headers:{
      "Content-Type":"application/json"
    },
    redirect:"follow",
    referrerPolicy:"no-referrer",
    body: JSON.stringify(data)
  })
  return response
}

export default postData