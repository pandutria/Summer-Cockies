const products = [
    {
        id: 1,
        name: "Bunny’s Eye",
        price: 12000,
        description: "Bunny's Eye menggabungkan sayuran hijau segar dan buah-buahan untuk menghasilkan minuman yang menyehatkan dan penuh nutrisi. Setiap tegukan memberikan manfaat maksimal bagi kesehatan dan energi harian Anda. Dengan bahan-bahan alami yang dipilih dengan cermat, Bunny's Eye membantu meningkatkan daya tahan tubuh dan mendukung metabolisme. Nikmati kesegaran dan kebaikan dari Bunn's Eye sebagai bagian dari gaya hidup sehat Anda!",
        image: "/images/Payment/Bunny.png"
    },
    {
        id: 2,
        name: "Strawberry Delight",
        price: 13000,
        description: "Strawberry menggabungkan sayuran hijau segar dan buah-buahan untuk menghasilkan minuman yang menyehatkan dan penuh nutrisi. Setiap tegukan memberikan manfaat maksimal bagi kesehatan dan energi harian Anda. Dengan bahan-bahan alami yang dipilih dengan cermat, Strawberry membantu meningkatkan daya tahan tubuh dan mendukung metabolisme. Nikmati kesegaran dan kebaikan dari Strawberry sebagai bagian dari gaya hidup sehat Anda!",
        image: "/images/Payment/Strawberry.png"
    },
    {
        id: 3,
        name: "Kaling Green",
        price: 15000,
        description: "Kaling Green menggabungkan sayuran hijau segar dan buah-buahan untuk menghasilkan minuman yang menyehatkan dan penuh nutrisi. Setiap tegukan memberikan manfaat maksimal bagi kesehatan dan energi harian Anda. Dengan bahan-bahan alami yang dipilih dengan cermat, Kaling Green membantu meningkatkan daya tahan tubuh dan mendukung metabolisme.",
        image: "/images/Payment/Kaling.png"
    },
    {
        id: 4,
        name: "Lemon Sereh",
        price: 9000,
        description: "Lemon Sereh adalah kombinasi lemon segar dan sereh, memberikan kesegaran dan rasa yang unik. Minuman ini tidak hanya menyegarkan tetapi juga kaya akan vitamin C yang baik untuk sistem kekebalan tubuh.",
        image: "/images/Payment/Lemon.png"
    },
    {
        id: 5,
        name: "Markisa Telang",
        price: 16000,
        description: "Markisa Telang menggabungkan rasa markisa yang manis dengan bunga telang yang memberikan warna biru yang indah. Ini adalah minuman yang menyegarkan dan penuh manfaat untuk kesehatan.",
        image: "/images/Payment/Markisa.png"
    },
    {
        id: 6,
        name: "Bunny's Red",
        price: 12000,
        description: "Bunny's Red adalah minuman yang menggabungkan buah-buahan merah segar yang kaya akan antioksidan. Minuman ini membantu menjaga kesehatan kulit dan meningkatkan daya tahan tubuh.",
        image: "/images/Payment/Bunny-red.png"
    },
    {
        id: 7,
        name: "Red Velvet Biscuits",
        price: 12000,
        description: "Red Velvet Biscuits adalah kue kering yang lembut dengan rasa manis dan sedikit pahit dari cokelat merah. Cocok untuk dinikmati bersama minuman favorit Anda.",
        image: "/images/redBiskuit.png"
    },
    {
        id: 8,
        name: "Chocolate Biscuits",
        price: 12000,
        description: "Chocolate Biscuits adalah kue kering yang terbuat dari cokelat premium, memberikan rasa manis yang kaya dan memuaskan. Ideal untuk pencinta cokelat.",
        image: "/images/coklatBiskuit.png"
    },
    {
        id: 9,
        name: "Matcha Biscuits",
        price: 12000,
        description: "Matcha Biscuits adalah kue kering yang menggunakan bubuk matcha berkualitas tinggi, menawarkan rasa teh hijau yang khas dan manfaat kesehatan.",
        image: "/images/greenBiskuit.png"
    }
];

function getProductById(id) {
    return products.find(product => product.id == id);
}