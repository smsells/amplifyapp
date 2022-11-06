/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const createButterfly = /* GraphQL */ `
  mutation CreateButterfly(
    $input: CreateButterflyInput!
    $condition: ModelButterflyConditionInput
  ) {
    createButterfly(input: $input, condition: $condition) {
      id
      scientificName
      commonName
      image
      family
      subfamily
      lifespan
      range
      hosts
      food
      habitat
      flights
      history
      funFact
      createdAt
      updatedAt
    }
  }
`;
export const updateButterfly = /* GraphQL */ `
  mutation UpdateButterfly(
    $input: UpdateButterflyInput!
    $condition: ModelButterflyConditionInput
  ) {
    updateButterfly(input: $input, condition: $condition) {
      id
      scientificName
      commonName
      image
      family
      subfamily
      lifespan
      range
      hosts
      food
      habitat
      flights
      history
      funFact
      createdAt
      updatedAt
    }
  }
`;
export const deleteButterfly = /* GraphQL */ `
  mutation DeleteButterfly(
    $input: DeleteButterflyInput!
    $condition: ModelButterflyConditionInput
  ) {
    deleteButterfly(input: $input, condition: $condition) {
      id
      scientificName
      commonName
      image
      family
      subfamily
      lifespan
      range
      hosts
      food
      habitat
      flights
      history
      funFact
      createdAt
      updatedAt
    }
  }
`;
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
      name
      username
      locationCity
      locationState
      Shipments {
        items {
          orderNumber
          shipmentDate
          arrivalDate
          supplier
          orgID
          id
          createdAt
          updatedAt
          organizationShipmentsId
        }
        nextToken
      }
      commonNameList {
        buttery {
          id
          scientificName
          commonName
          image
          family
          subfamily
          lifespan
          range
          hosts
          food
          habitat
          flights
          history
          funFact
          createdAt
          updatedAt
        }
        newName
        orgID
        id
        createdAt
        updatedAt
      }
      headerColor
      sectionHeaderColor
      menuColor
      linkFontColor
      adminIconColor
      homepageBackground
      font
      logo
      coverMedia
      activeModules {
        title
        content
        id
        createdAt
        updatedAt
      }
      inactiveModules {
        title
        content
        id
        createdAt
        updatedAt
      }
      speciesInfoList {
        items {
          name
          numInFlight
          totalReceived
          firstFlown
          lastFlown
          id
          createdAt
          updatedAt
          organizationSpeciesInfoListId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
      name
      username
      locationCity
      locationState
      Shipments {
        items {
          orderNumber
          shipmentDate
          arrivalDate
          supplier
          orgID
          id
          createdAt
          updatedAt
          organizationShipmentsId
        }
        nextToken
      }
      commonNameList {
        buttery {
          id
          scientificName
          commonName
          image
          family
          subfamily
          lifespan
          range
          hosts
          food
          habitat
          flights
          history
          funFact
          createdAt
          updatedAt
        }
        newName
        orgID
        id
        createdAt
        updatedAt
      }
      headerColor
      sectionHeaderColor
      menuColor
      linkFontColor
      adminIconColor
      homepageBackground
      font
      logo
      coverMedia
      activeModules {
        title
        content
        id
        createdAt
        updatedAt
      }
      inactiveModules {
        title
        content
        id
        createdAt
        updatedAt
      }
      speciesInfoList {
        items {
          name
          numInFlight
          totalReceived
          firstFlown
          lastFlown
          id
          createdAt
          updatedAt
          organizationSpeciesInfoListId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
      name
      username
      locationCity
      locationState
      Shipments {
        items {
          orderNumber
          shipmentDate
          arrivalDate
          supplier
          orgID
          id
          createdAt
          updatedAt
          organizationShipmentsId
        }
        nextToken
      }
      commonNameList {
        buttery {
          id
          scientificName
          commonName
          image
          family
          subfamily
          lifespan
          range
          hosts
          food
          habitat
          flights
          history
          funFact
          createdAt
          updatedAt
        }
        newName
        orgID
        id
        createdAt
        updatedAt
      }
      headerColor
      sectionHeaderColor
      menuColor
      linkFontColor
      adminIconColor
      homepageBackground
      font
      logo
      coverMedia
      activeModules {
        title
        content
        id
        createdAt
        updatedAt
      }
      inactiveModules {
        title
        content
        id
        createdAt
        updatedAt
      }
      speciesInfoList {
        items {
          name
          numInFlight
          totalReceived
          firstFlown
          lastFlown
          id
          createdAt
          updatedAt
          organizationSpeciesInfoListId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const createReplacementCommonName = /* GraphQL */ `
  mutation CreateReplacementCommonName(
    $input: CreateReplacementCommonNameInput!
    $condition: ModelReplacementCommonNameConditionInput
  ) {
    createReplacementCommonName(input: $input, condition: $condition) {
      buttery {
        id
        scientificName
        commonName
        image
        family
        subfamily
        lifespan
        range
        hosts
        food
        habitat
        flights
        history
        funFact
        createdAt
        updatedAt
      }
      newName
      orgID
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateReplacementCommonName = /* GraphQL */ `
  mutation UpdateReplacementCommonName(
    $input: UpdateReplacementCommonNameInput!
    $condition: ModelReplacementCommonNameConditionInput
  ) {
    updateReplacementCommonName(input: $input, condition: $condition) {
      buttery {
        id
        scientificName
        commonName
        image
        family
        subfamily
        lifespan
        range
        hosts
        food
        habitat
        flights
        history
        funFact
        createdAt
        updatedAt
      }
      newName
      orgID
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteReplacementCommonName = /* GraphQL */ `
  mutation DeleteReplacementCommonName(
    $input: DeleteReplacementCommonNameInput!
    $condition: ModelReplacementCommonNameConditionInput
  ) {
    deleteReplacementCommonName(input: $input, condition: $condition) {
      buttery {
        id
        scientificName
        commonName
        image
        family
        subfamily
        lifespan
        range
        hosts
        food
        habitat
        flights
        history
        funFact
        createdAt
        updatedAt
      }
      newName
      orgID
      id
      createdAt
      updatedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      orderNumber
      shipmentDate
      arrivalDate
      supplier
      packingList {
        items {
          species
          numReceived
          emergedInTransit
          damagedInTransit
          diseased
          parasites
          poorEmerged
          numEmerged
          orgID
          orderID
          id
          createdAt
          updatedAt
          orderPackingListId
        }
        nextToken
      }
      orgID
      id
      createdAt
      updatedAt
      organizationShipmentsId
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      orderNumber
      shipmentDate
      arrivalDate
      supplier
      packingList {
        items {
          species
          numReceived
          emergedInTransit
          damagedInTransit
          diseased
          parasites
          poorEmerged
          numEmerged
          orgID
          orderID
          id
          createdAt
          updatedAt
          orderPackingListId
        }
        nextToken
      }
      orgID
      id
      createdAt
      updatedAt
      organizationShipmentsId
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      orderNumber
      shipmentDate
      arrivalDate
      supplier
      packingList {
        items {
          species
          numReceived
          emergedInTransit
          damagedInTransit
          diseased
          parasites
          poorEmerged
          numEmerged
          orgID
          orderID
          id
          createdAt
          updatedAt
          orderPackingListId
        }
        nextToken
      }
      orgID
      id
      createdAt
      updatedAt
      organizationShipmentsId
    }
  }
`;
export const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem(
    $input: CreateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    createOrderItem(input: $input, condition: $condition) {
      species
      numReceived
      emergedInTransit
      damagedInTransit
      diseased
      parasites
      poorEmerged
      numEmerged
      orgID
      orderID
      id
      createdAt
      updatedAt
      orderPackingListId
    }
  }
`;
export const updateOrderItem = /* GraphQL */ `
  mutation UpdateOrderItem(
    $input: UpdateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    updateOrderItem(input: $input, condition: $condition) {
      species
      numReceived
      emergedInTransit
      damagedInTransit
      diseased
      parasites
      poorEmerged
      numEmerged
      orgID
      orderID
      id
      createdAt
      updatedAt
      orderPackingListId
    }
  }
`;
export const deleteOrderItem = /* GraphQL */ `
  mutation DeleteOrderItem(
    $input: DeleteOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    deleteOrderItem(input: $input, condition: $condition) {
      species
      numReceived
      emergedInTransit
      damagedInTransit
      diseased
      parasites
      poorEmerged
      numEmerged
      orgID
      orderID
      id
      createdAt
      updatedAt
      orderPackingListId
    }
  }
`;
export const createModule = /* GraphQL */ `
  mutation CreateModule(
    $input: CreateModuleInput!
    $condition: ModelModuleConditionInput
  ) {
    createModule(input: $input, condition: $condition) {
      title
      content
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateModule = /* GraphQL */ `
  mutation UpdateModule(
    $input: UpdateModuleInput!
    $condition: ModelModuleConditionInput
  ) {
    updateModule(input: $input, condition: $condition) {
      title
      content
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteModule = /* GraphQL */ `
  mutation DeleteModule(
    $input: DeleteModuleInput!
    $condition: ModelModuleConditionInput
  ) {
    deleteModule(input: $input, condition: $condition) {
      title
      content
      id
      createdAt
      updatedAt
    }
  }
`;
export const createSpeciesInfo = /* GraphQL */ `
  mutation CreateSpeciesInfo(
    $input: CreateSpeciesInfoInput!
    $condition: ModelSpeciesInfoConditionInput
  ) {
    createSpeciesInfo(input: $input, condition: $condition) {
      name
      numInFlight
      totalReceived
      firstFlown
      lastFlown
      id
      createdAt
      updatedAt
      organizationSpeciesInfoListId
    }
  }
`;
export const updateSpeciesInfo = /* GraphQL */ `
  mutation UpdateSpeciesInfo(
    $input: UpdateSpeciesInfoInput!
    $condition: ModelSpeciesInfoConditionInput
  ) {
    updateSpeciesInfo(input: $input, condition: $condition) {
      name
      numInFlight
      totalReceived
      firstFlown
      lastFlown
      id
      createdAt
      updatedAt
      organizationSpeciesInfoListId
    }
  }
`;
export const deleteSpeciesInfo = /* GraphQL */ `
  mutation DeleteSpeciesInfo(
    $input: DeleteSpeciesInfoInput!
    $condition: ModelSpeciesInfoConditionInput
  ) {
    deleteSpeciesInfo(input: $input, condition: $condition) {
      name
      numInFlight
      totalReceived
      firstFlown
      lastFlown
      id
      createdAt
      updatedAt
      organizationSpeciesInfoListId
    }
  }
`;
