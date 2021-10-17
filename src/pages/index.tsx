import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle"; 
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import { FormElementsContainer } from "@styles/pages/index.style";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />

      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />

      <FormElementsContainer>
        <TextFieldMask
          mask={"99.999-999"}
          label={"Digite seu CEP"}
          fullWidth
          variant={"outlined"}
        />

        <Typography color={"error"}>CEP Inválido</Typography>

        <Button
          variant={"contained"}
          color={"secondary"}
          sx={{ width: "220px"}}
        >
          Buscar
        </Button> 
      </FormElementsContainer>  

      <UserInformation
        name={"Flavio Mendes"}
        picture={"https://github.com/Flaviohmm.png"}
        rating={3}
        description={"Natal"}
      />
    </div>
  )
}