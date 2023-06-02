import { useQuery } from "@apollo/client";
import {
  Backdrop,
  Fade,
  Box,
  Typography,
  Modal,
  Grid,
  Skeleton,
  Avatar,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { GET_CHARACTER } from "../logic/graphql/gql";

function ModalComp({
  toggle,
  setToggle,
  id,
}: {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
  id: number;
}) {

  const { data, loading } = useQuery(GET_CHARACTER, {
    variables: {
      id: id,
    },
  });

  const ModalItem = ({ title, value }: { title: string; value: string }) => (
    <Grid item xs={12} md={6}>
      {loading ? (
        <Skeleton variant="rounded"  />
      ) : (
        <Typography>
          {title} : {value}
        </Typography>
      )}
    </Grid>
  );

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={toggle}
      onClose={() => setToggle(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={toggle}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          {loading ? (
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              style={{ marginBottom: 8 }}
            />
          ) : (
            <Avatar alt={data?.character.name} src={data?.character.image} />
          )}
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {loading ? (
              <Skeleton variant="rounded" />
            ) : (
              <>{data?.character.name}</>
            )}
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <ModalItem title="Id" value={data?.character.id} />
              <ModalItem title="Species" value={data?.character.species} />
              <ModalItem title="Status" value={data?.character.status} />
              <ModalItem title="Gender" value={data?.character.gender} />
            </Grid>
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ModalComp;
