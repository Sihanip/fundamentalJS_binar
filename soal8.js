const dataPenjualanNovel = [
    {
      idProduk: "BOOK002421",
      namaProduk: "Pulang - Pergi",
      penulis: "Tere Liye",
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduk: "BOOK002351",
      namaProduk: "Selamat Tinggal",
      penulis: "Tere Liye",
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduk: "BOOK002941",
      namaProduk: "Garis Waktu",
      penulis: "Fiersa Besari",
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduk: "BOOK002942",
      namaProduk: "Laskar Pelangi",
      penulis: "Andrea Hirata",
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];
  console.log(getInfoPenjualan(dataPenjualanNovel));
  
  function getInfoPenjualan(dataPenjualan) {
    //check data type
    if (!Array.isArray(dataPenjualan)) {
      console.error("Invalid data type");
      return {};
    }
    //start process
    let totalKeuntungan = 0;
    let totalModal = 0;
    let produkTerlaris = dataPenjualan[0];
    let persentaseKeuntungan = 0;
    let penulisBuku = {};
    let penulisTerlaris = "";
  
    dataPenjualan.forEach((data) => {
      modal = data.hargaBeli * (data.totalTerjual + data.sisaStok);
      keuntungan = data.hargaJual * data.totalTerjual - modal;
      totalModal += modal;
      totalKeuntungan += keuntungan;
      if (data.totalTerjual > produkTerlaris.totalTerjual) {
        produkTerlaris = data;
      }
      if (penulisBuku[data.penulis]) {
        penulisBuku[data.penulis] += data.totalTerjual;
      } else penulisBuku[data.penulis] = data.totalTerjual;
    });

    console.log(penulisBuku);
    persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;
    penulisTerlaris = Object.keys(penulisBuku).reduce((a, b) => {
      return penulisBuku[a] > penulisBuku[b] ? a : b;
    });
  
    const result = {
      totalKeuntungan: "Rp. " + totalKeuntungan.toLocaleString(),
      totalModal: "Rp. " + totalModal.toLocaleString(),
      persentaseKeuntungan: Math.round(persentaseKeuntungan) + "%",
      produkTerlaris: produkTerlaris.namaProduk,
      penulisBuku: penulisBuku,
      penulisTerlaris: penulisTerlaris,
    };
    return result;
  }  

  