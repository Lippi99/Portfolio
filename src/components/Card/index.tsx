import { styled } from "../../stitches.config";

interface CardProps {
  background: string;
  alt: string;
}

export const Card = ({ background, alt }: CardProps) => {
  const Container = styled("div", {
    overflow: "hidden",
    height: "100%",
    transition: "200ms",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
    },
  });

  return (
    <Container>
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          border: "2px solid rgb(139, 233, 253)",
          borderRadius: "3px",
        }}
        src={background}
        alt={alt}
      />
    </Container>
  );
};
