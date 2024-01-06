import { Box, Container, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ backgroundColor: "primary.main", color: "accent.main" }}>
      <Container sx={{ display: { xs: "flex" } }}>
        <Box sx={{ display: { xs: "flex" } }}>
          <Box>
            <Typography variant="h6" sx={{ px: "9rem", py: "1rem" }}>
              Get 5% Off your first order
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ px: "9rem", py: "1rem" }}>
              Regent Street, A4, A4201, London
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ px: "1rem", py: "1rem" }}>
            Basket Icon
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ px: "1rem", py: "1rem" }}>
            23 Items
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ px: "1rem", py: "1rem" }}>
            GBP 79.89
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ px: "1rem", py: "1rem" }}>
            Arrow Icon
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
