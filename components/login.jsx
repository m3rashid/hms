import { Button } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { Cross1Icon } from "@modulz/radix-icons";

function Demo({ title, children }) {
  const modals = useModals();

  const openContentModal = () => {
    const id = modals.openModal({
      title: title,
      children: (
        <>
          <Button fullWidth onClick={() => modals.closeModal(id)}>
            <Cross1Icon />
          </Button>
          {children}
        </>
      ),
    });
  };

  return openContentModal;
}
