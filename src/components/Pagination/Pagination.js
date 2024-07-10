import React, { useEffect, useState,useContext } from 'react';
import { PaginationWrapper } from './Pagination.styled';
import P from 'react-pagimagic';
import { Card, ListGroup, Button } from 'react-bootstrap';
import CompareButton from '../CompareButton/Buttons';
import Context from '../../Context';

const Pagination = () => {
  const [showFull, setShowFull] = useState(false);
  const [variatModel, setVariantModel] = useState(false);

  //всі useState з App.js
  const ContextValueApp = useContext(Context);

  useEffect(() => {
    ContextValueApp.setCompareCar([]);
  }, []);

  // перевіряе чи вид пошуку "модель", якщо так задае variatModel true.
  const renderVariantCard = (variant) => {
    variant === 'модель' ? setVariantModel(true) : setVariantModel(false);
  };
  useEffect(() => {
    renderVariantCard(ContextValueApp.typeCard);
  }, [ContextValueApp.typeCard]);

  const handleCompare = (item) => {
    if (ContextValueApp.compareCar.includes(item)) {
      ContextValueApp.setCompareCar(ContextValueApp.compareCar.filter(car => car !== item));
    } else if (ContextValueApp.compareCar.length < 2) {
      ContextValueApp.setCompareCar([...ContextValueApp.compareCar, item]);
    }
  };

  const renderChildren = list => {
    return list.map((item, index) => {
      const handleToggle = () => {
        setShowFull(!showFull);
      };

      const fields = [
        { label: "Номер", value: item.digits || "----------" },
        { label: "VIN", value: item.vin || "**************" },
        { label: "Реестрація", value: item.address || "--" },
        { label: "Дата реестрації", value: item.registered_at || "-" },
        { label: "Операція", value: item.operation?.ua || "--" },
        { label: "Тип", value: item.kind?.ua || "--" },
        { label: "Рік випуску", value: item?.model_year || "--" },
        { label: "Колір", value: item.color?.ua || "--" },
        { label: "Вид палива", value: item.fuel?.ua || "--" },
        { label: "Об'ем двигуна", value: item.displacement || "---" },
        { label: "Вага без навантаження", value: item.own_weight || "--" },
        { label: "Максимальна вага", value: item.total_weight || "--" }
      ];

      const fieldModel = [
        { label: "Марка", value: item["full_title"] ? item["full_title"] : "--" },
        { label: "Рік початку випуску", value: item.catalog_model?.year_from ? item.catalog_model.year_from : "---" },
        { label: "Припинили випускати", value: item.catalog_model?.year_to ? item.catalog_model.year_to : "----" }
      ];

      const styleCard = {
        maxWidth: '30rem',
        fontWeight: "600",
        fontSize: "20px",
      };

      return (
        <Card key={index} style={styleCard} className='border border-2 border-success mb-2'>
          <Card.Img variant="top" src={variatModel ? item.catalog_model?.photo_url : item.photo_url} />
          <Card.Body>
            {variatModel ? (
              <>
                <Card.Title>{fieldModel[0].value}</Card.Title>
                <Card.Text style={{ textAlign: "start" }}>
                  <ListGroup variant="flush">
                    {fieldModel.map((field, idx) => (
                      <ListGroup.Item key={idx}>{field.label}: {field.value}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Text>
              </>
            ) :
              (
                <>
                  <Card.Title>{item.vendor} {item.model}</Card.Title>
                  <Card.Text style={{ textAlign: "start" }}>
                    <ListGroup variant="flush">
                      {(showFull ? fields : fields.slice(0, 4)).map((field, idx) => (
                        <ListGroup.Item key={idx}>{field.label}: {field.value}</ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Text>
                </>
              )}
            <Button variant="success" onClick={handleToggle} style={{ color: "black", fontWeight: "600" }}>
              {showFull ? "Приховати" : "Показати все"}
            </Button>
            <CompareButton
              isCompared={ContextValueApp.compareCar.includes(item)}
              handleCompare={() => handleCompare(item)}
              item={item}
            />
          </Card.Body>
        </Card>
      );
    });
  };

  const CURRENT_PAGE_INDEX = 0;

  return (
    <PaginationWrapper style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
      <P
        list={ContextValueApp.auto}
        itemsPerPage={1}
        currentPageIndex={CURRENT_PAGE_INDEX}
        className="your-class-if-its-necessary"
        maximumVisiblePaginators={6}
        renderChildren={renderChildren}
        useDefaultStyles
      />

    </PaginationWrapper>
  );
};

export default Pagination;
