import {
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
} from "@mui/material";
import { GetCharacterQuery } from "__generated__/graphql";
import { RootState } from "logic/store/config";
import { AddToList, RemoveFromList } from "logic/store/listSlice";
import { useDispatch, useSelector } from "react-redux";

function ListItemComp({
  item,
  item: { id, name, image },
  type,
  onInfo,
}: {
  item: GetCharacterQuery["character"];
  onInfo?: (id: string) => void;
  type: "store" | "api";
}) {
  const dispatch = useDispatch();
  const { list } = useSelector((store: RootState) => store.list);
  return (
    <ListItem key={id} disablePadding>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar alt={name} src={image} />
        </ListItemAvatar>
        <ListItemText primary={name} />
        {type === "api" && (
          <Button
            disabled={list.findIndex((i) => i.id === id) >= 0}
            onClick={() => dispatch(AddToList(item))}
          >
            Add
          </Button>
        )}
        {type === "api" && (
          <Button onClick={() => onInfo(id)} color="success">
            Info
          </Button>
        )}

        {type === "store" && (
          <Button onClick={() => dispatch(RemoveFromList(id))} color="error">
            Remove
          </Button>
        )}
      </ListItemButton>
    </ListItem>
  );
}

export default ListItemComp;
