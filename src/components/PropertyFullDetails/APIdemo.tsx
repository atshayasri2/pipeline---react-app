import React, { useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import "./product.css";
import { GET_Property } from "../../service/service";
import withLoading from "./withLoading";
import Property from "./Property";
interface IProps extends RouteComponentProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const APIdemo: React.FC<IProps> = (props) => {
  const [isLoading, setisLoading] = useState(true);
  const [properties, setProperties] = useState({} as IProps);
  const params = useParams() as any;
  useEffect(() => {
    // const { params } = props.match as any;
    setTimeout(async () => {
      try {
        await GET_Property(params.id).then((response) => {
          const property = response.data;
          setProperties(property);
          setisLoading(false);
          console.log(property);
        });
      } catch (error) {
        console.log("error", error);
      }
      console.log("Property Data is fetched");
    }, 3000);
    return () => {
      //clean up
      console.log("componentWillUnmount");
    };
  });
  const ListWithLoading = withLoading(Property);
  return (
    <>
      <ListWithLoading loading={isLoading} properties={properties} />
    </>
  );
};
export default APIdemo;
