const dataPenjualanPakAldi = [
    {
      namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
      hargaSatuan: 760000,
      kategori: "Sepatu Sport",
      totalTerjual: 90,
    },
    {
      namaProduct: "Sepatu Warrior Tristan Black Brown High",
      hargaSatuan: 960000,
      kategori: "Sepatu Sneaker",
      totalTerjual: 37,
    },
    {
      namaProduct: "Sepatu Warrior Tristan Maroon High",
      hargaSatuan: 360000,
      kategori: "Sepatu Sneaker",
      totalTerjual: 90,
    },
    {
      namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
      hargaSatuan: 960000,
      kategori: "Sepatu Sneaker",
      totalTerjual: 90,
    },
  ];
  
  function getTotalPenjualan(dataPenjualan) {
    //check data type
    if (!Array.isArray(dataPenjualan))
      return "Error : data penjualan harus berupa array";
    //start process
    const totalPenjualan = dataPenjualan.reduce((total, data) => {
      return total + data.totalTerjual;
    }, 0);

    if (isNaN(totalPenjualan)) return "Error: format data salah !";
      else return totalPenjualan;
  }
  
  console.log(getTotalPenjualan(dataPenjualanPakAldi));
  