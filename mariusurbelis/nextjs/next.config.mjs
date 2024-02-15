/** @type {import('next').NextConfig} */
const nextConfig = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};

export default nextConfig;
