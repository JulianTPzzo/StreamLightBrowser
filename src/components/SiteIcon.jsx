
function SiteIcon({ img, title, url }) {
  const openCustomWindow = (customUrl) => {
    const completeUrl =
      customUrl.startsWith("http://") || customUrl.startsWith("https://")
        ? customUrl
        : `http://${customUrl}`;

    // Abre la URL en una nueva pestaña del navegador
    window.open(completeUrl, "_blank");
  };

  return (
    <div className="min-w-[200px] w-1/3 m-2 p-2 site-icon flex gap-2 items-center cursor-pointer border hover:bg-gray-950 " onClick={() => openCustomWindow(url)}>
      <img className='h-8 ' src={ img } alt={title} />
      <span className=' font-bold'>{title}</span>
    </div>
  );
}

export default SiteIcon;
