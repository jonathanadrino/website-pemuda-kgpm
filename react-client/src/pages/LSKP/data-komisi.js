/*  KP PP
Ketua
Pnt. Andrih Makasihidi, S.H
Wakil
Dedykarto Ansiga, S.H
Sekertaris
Pnt. Jalindra Assa, S.Pd
Wakil
Pnt. Roy Liow, S.H
Bendahara
Dkn. Hetli Lembong, S.Pd
Koordinator Bidang Organisasi
Pnt Wandy Sembel, S.P
Korbid Kaderisasi
Pnt Ireine Pinatik, S.T
Korbid Aksi Pelayanan
Pnt Jeiner Laholo
Korbid Kerohanian
Gbl Wedayanti Harianto, S.SI(Teol)
Korbid Minat Bakat
Pnt Wendy Timporok
Korbid Media Komunikasi Informasi
Pnt Anggie Pasuhuk, S.E., M.M */

let data = [
    {
    name: 'Pnt. Andrih Makasihidi, S.H',
    title: 'Ketua',
    },
    {
    name: 'Dedykarto Ansiga, S.H',
    title: 'Wakil Ketua',
    },
    {
    name: 'Pnt. Jalindra Assa, S.Pd',
    title: 'Sekertaris',
    },
    {
    name: 'Pnt. Roy Liow, S.H',
    title: 'Wakil Sekertaris',
    },
    {
    name: 'Dkn. Hetli Lembong, S.Pd',
    title: 'Bendahara',
    },
    {
    name: 'Pnt. Wandy Sembel, S.P',
    title: 'Koordinator Bidang Organisasi',
    },
    {
    name: 'Pnt. Ireine Pinatik, S.T',
    title: 'Koordinator Bidang Kaderisasi',
    },
    {
    name: 'Pnt. Jeiner Laholo',
    title: 'Koordinator Bidang Aksi Pelayanan',
    },
    {
    name: 'Gbl. Wedayanti Harianto, S.SI(Teol)',
    title: 'Koordinator Bidang Kerohanian',
    },
    {
    name: 'Pnt. Wendy Timporok',
    title: 'Koordinator Bidang Minat Bakat',
    },
    {
    name: 'Pnt. Anggie Pasuhuk, S.E., M.M',
    title: 'Koordinator Bidang Media Komunikasi Informasi',
    }
]

data.map(e => {
    e.img = e.name.replace(/ /g,"-")
    return e
})

export default data