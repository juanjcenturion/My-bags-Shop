import { useTheme, useMediaQuery, Typography } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/banner/bannerStyle";

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <BannerContainer>
            <BannerImage src="/images/banner/banner-ryzen.png" />
            <BannerContent>
                <Typography variant="h6">Huge Collection</Typography>
                <BannerTitle variant='h2'>
                    New Bags
                </BannerTitle>

                <BannerDescription variant="subtitle">
                    Torem Ipsum dolor sit amet, consectetur adipisicing elitsed do
                    eiusmo tempor incididunt ut labore et dolore magna
                </BannerDescription>
            </BannerContent>
        </BannerContainer>
    )
}